$(function() {
  $('.js-hue-scenes').initHueScenes();
  $('.js-hue-rooms').initHueGroups();
  $('.js-hue-schedules').initHueSchedules();
});

$.fn.initHueGroups = function() {
  var $hueGroupContainer = $(this);
  $.get(getHueApiBaseUrl() + '/groups', function(rooms) {
    $.get(getHueApiBaseUrl() + '/lights', function(lightData) {
      $.each(rooms, function(roomId, roomData) {
        $hueGroupContainer.addRoom(roomId, roomData, lightData);
      });
    }, 'json');
  }, 'json');
};

$.fn.addRoom = function(roomId, room, lights) {
  var $container = $(this);
  var $ul = $(this).children('ul');
  var $tabData = $(this).children('div.tab-content');
  var lampSliders = [];
  var isFirst = $ul.children('li').length === 0;

  var roomState = room.state.any_on == true ? 'teal' : 'grey';
  roomState = room.state.all_on == true ? 'yellow' : roomState;

  $ul.append('<li class="' + (isFirst ? ' active' : '') + '"><a href="#room' + roomId + '" data-toggle="tab"><span class="hidden-xs">' + room.name + '</span><span class="hidden-sm hidden-md hidden-lg">' + room.name.substr(0,4) + '</span> <span class="hidden-xs badge bg-' + roomState + '"><i class="ion ion-ios-lightbulb"></i></span></a></li>');
  var $room = $('<div class="tab-pane box-body no-padding' + (isFirst ? ' active' : '') + '" id="room' + roomId + '" data-room-id="' + roomId + '"><table class="table"><tbody></tbody></table></div>');
  $room.addLight(null, room);
  $.each(room.lights, function(idx, lightId) {
    $room.addLight(lightId, lights[lightId]);
  });
  $tabData.append($room);
  $('tr', $room).each(function() {
    $(this).addSlider('bri');
    $(this).addSlider('hue');
    $(this).addSlider('sat');
  });
};

$.fn.addSlider = function(data) {
  var $light = $(this);
  
  //console.log($slider[1].getAttribute("id"));
  //console.log(slider);
  var $brightness = $('.hue-brightness span', $light);
  
  switch (data) {
    case 'bri':
      var $slider = $('.lamp-slider', $light);
      var slider = document.getElementById($slider[0].getAttribute("id"));
      var brightness = $slider.data('brightness');

      if (slider == null) break;
      noUiSlider.create(slider, {
        start: brightness,
        range: {
          'min': 0,
          'max': 100
        },
      });

      slider.noUiSlider.on('change', function(values, handle) {
        $light.setLight('bri');
      });

      slider.noUiSlider.on('slide', function(values, handle) {
        var $tr = $slider.parents('tr');
        $('.hue-brightness .badge', $tr).html(Math.round(values));
        // If we're adjusting the room slider or state, replicate state to all.
        if ($tr.data('type') == 'room') {
          $tr.siblings('tr').each(function() {
            $row = $(this);
            $('.hue-brightness span', $row).html($('.badge', $tr).html());
            var sliderId = $('.lamp-slider', $row).attr('id');
            console.log(sliderId);
            document.getElementById(sliderId).noUiSlider.set(values);
          });
        }
      });

      $brightness.click(function() {
        var newState = $(this).data('state') == 'on' ? 'off' : 'on';
        $(this).data('state', newState);
        var $tr = $(this).parents('tr');
        // If we're turning on/off the whole room, spread the state to all lights.
        if ($tr.data('type') == 'room') {
          $tr.siblings('tr').each(function() {
            $row = $(this);
            $('.hue-brightness span', $row).removeClass('bg-' + (newState == 'on' ? 'grey' : 'yellow'));
            $('.hue-brightness span', $row).addClass('bg-' + (newState == 'on' ? 'yellow' : 'grey'));
            $('.hue-brightness span', $row).data('state', newState);
          });
        }
        $light.setLight('button');
      });
      break;

    case 'hue':
      var $slider = $('.lamp-slider', $light);
      console.log($slider);
      var slider = document.getElementById($slider[1].getAttribute("id"));
      var hue = $slider.data('brightness');
      var $hue = $('.hue-color span', $light);

      if (slider == null) break;
      noUiSlider.create(slider, {
        start: hue,
        range: {
          'min': 0,
          'max': 100
        },
      });

      slider.noUiSlider.on('change', function(values, handle) {
        $light.setLight('hue');
      });

      slider.noUiSlider.on('slide', function(values, handle) {
        var $tr = $slider.parents('tr');
        $('.hue-color .badge', $tr).html(Math.round(values));
        // If we're adjusting the room slider or state, replicate state to all.
        if ($tr.data('type') == 'room') {
          $tr.siblings('tr').each(function() {
            $row = $(this);
            $('.hue-color span', $row).html($('.badge', $tr).html());
            var sliderId = $('.lamp-slider', $row)[1].getAttribute("id");
            //console.log(sliderId);
            document.getElementById(sliderId).noUiSlider.set(values);
          });
        }
      });
      break;

    case 'sat':
      var $slider = $('.lamp-slider', $light);
      var slider = document.getElementById($slider[2].getAttribute("id"));
      var sat = $slider.data('brightness');
      var $sat = $('.hue-sat span', $light);
      console.log(sat);

      if (slider == null) break;
      noUiSlider.create(slider, {
        start: sat,
        range: {
          'min': 0,
          'max': 100
        },
      });

      slider.noUiSlider.on('change', function(values, handle) {
        $light.setLight('sat');
      });

      slider.noUiSlider.on('slide', function(values, handle) {
        var $tr = $slider.parents('tr');
        $('.hue-saturation .badge', $tr).html(Math.round(values));
        // If we're adjusting the room slider or state, replicate state to all.
        if ($tr.data('type') == 'room') {
          $tr.siblings('tr').each(function() {
            $row = $(this);
            $('.hue-saturation span', $row).html($('.badge', $tr).html());
            var sliderId = $('.lamp-slider', $row)[2].getAttribute("id");
            console.log(sliderId);
            document.getElementById(sliderId).noUiSlider.set(values);
          });
        }
      });
      break;
  }
};

/**
 * Adds a light row to a table. If lightId is missing, assumed to be whole room.
 */
$.fn.addLight = function(lightId, obj) {
  var $room = $(this);
  var roomId = $room.data('room-id');
  var sliderId = 'lamp_sliders_' + roomId + (lightId ? '_' + lightId : '');
  var $roomTable = $room.find('tbody');
  if (lightId) {
    var brightness = Math.round(briToPercentage(obj.state.bri));
    var lightState = obj.state.on == true ? 'on' : 'off';
    var hue        = Math.round(hueToPercentage(obj.state.hue));
    var saturation = Math.round(satToPercentage(obj.state.sat));
  }
  else {
    var lightState = obj.state.all_on == true ? 'on' : 'off';
    var brightness = 50;
    var hue        = 50;
    var saturation = 50;
  }
  
  $roomTable.append(
  '<tr data-id="' + (lightId ? lightId : roomId) + '" data-type="' + (lightId ? 'light' : 'room') + '">' + 
  '<td><div class="lamp-name"><h4>' + obj.name + ' <small>(' + (lightId ? lightId : roomId) + ')</small></h4></div>' +
  'Brightness<div class="lamp-slider" id="'+ sliderId  + '_1" data-brightness="' + brightness + '"></div></div>' + 
  'Hue<div class="lamp-slider" id="'+ sliderId  + '_2" data-brightness="' + hue + '"></div>' + 
  'Saturation<div class="lamp-slider" id="'+ sliderId  + '_3" data-brightness="' + saturation + '"></div></td>' +
  '<td><div class="hue-brightness span-value"><span class="badge bg-' + (lightState == 'on' ? 'yellow' : 'grey') + '" data-state="' + lightState + '">' + brightness + '</span>' + 
  '<div class="hue-color span-value"><span class="badge bg-' + (lightState == 'on' ? 'yellow' : 'grey') + '" data-state="' + lightState + '">' + hue + '</span>' +
  '<div class="hue-saturation span-value"><span class="badge bg-' + (lightState == 'on' ? 'yellow' : 'grey') + '" data-state="' + lightState + '">' + saturation + '</span></td>' + 
  '</tr>' );
};

/**
 * Set light/room state and brightness.
 */
$.fn.setLight = function(origin) {
  var $light = $(this);
  var isRoom = $light.data('type') == 'room';
  var id = $light.data('id');
  var $brightness = $('.hue-brightness span', $light);
  var $hue        = $('.hue-color span', $light);
  var $sat        = $('.hue-saturation span', $light);
  var state = $brightness.data('state');
  var data = {};

  if (origin == 'bri')    { data.bri = percentageToBri($brightness.html()); }
  if (origin == 'hue')    { data.hue = percentageToHue($hue.html()); }
  if (origin == 'sat')    { data.sat = percentageToSat($sat.html()); }
  if (origin == 'button') { data.on = state == 'on' ? true : false }

  var url = getHueApiBaseUrl() + '/' + (isRoom ? 'groups' : 'lights') + '/' + id + '/' + (isRoom ? 'action' : 'state');
  $.ajax({
    'url': url,
    'type': 'put',
    'data': JSON.stringify(data),
    'success': function(data) {
      $brightness.addClass(state == 'on' ? 'bg-yellow' : 'bg-grey');
      $brightness.removeClass(state == 'on' ? 'bg-grey' : 'bg-yellow');
    }
  });
};

/**
 * Retrieves all the scenes from the hue api.
 */
$.fn.initHueScenes = function() {
  $sceneContainer = $(this);
  $.get(getHueApiBaseUrl() + '/scenes', function(scenes) {
    $.each(scenes, function(sceneId, scene) {
      if (scene.owner == getHueUser()) {
        $('.big-buttons', $sceneContainer).addScene(sceneId, scene);
        $('.small-buttons', $sceneContainer).addScene(sceneId, scene);
      }
    });
  }, 'json');
};

/**
 * Adds a scene button to the dom.
 */
$.fn.addScene = function(sceneId, scene) {
  var $button;
  if ($(this).hasClass('big-buttons')) {
    $button = $('<a class="btn btn-app js-hue-scene hidden-xs" href="#" data-scene-id="' + sceneId + '"><span class="badge bg-orange">' + scene.lights.length + '</span>'+
      '<i class="fa fa-heart-o"></i>' + scene.name + '</a>');
  }
  else {
    $button = $('<button type="button" class="btn btn-sm btn-default js-hue-scene" data-scene-id="' + sceneId + '">' + scene.name.substr(0,10) + '</small></button>');
  }
  
  $(this).append($button);
  $button.click(function() {
    $(this).setScene();
  });
}

/**
 * Recalls a specific scene.
 */
$.fn.setScene = function() {
  var sceneId = $(this).data('scene-id');
  console.log(sceneId);
  var $button = $(this);
  var url = getHueApiBaseUrl() + '/groups/1/action';
  var data = {'scene': sceneId}
  $.ajax({
    'url': url,
    'type': 'put',
    'data': JSON.stringify(data),
    'success': function(data) {
      console.log(data);
      $button.siblings('.btn').removeClass('bg-yellow');
      $button.addClass('bg-yellow');
    }
  });
  
};

$.fn.createScene = function() {
  var data = {"name":"Romantic dinner", "lights":["1","2"], "recycle":false, "transitiontime":50}
  var url = getHueApiBaseUrl() + '/scenes';

  $.ajax({
    'url': url,
    'type': 'post',
    'data': JSON.stringify(data),
    'success': function(data) {
      console.log(data);
    }
  })
}

/**
 * Inits the schedules
 */
$.fn.initHueSchedules = function() {
  var $scheduleContainer = $(this);
  $.get(getHueApiBaseUrl() + '/schedules', function(schedules) {
    $.each(schedules, function (scheduleId, schedule) {
      $scheduleContainer.addSchedule(scheduleId, schedule);
    })
  }, 'json');
}

$.fn.addSchedule = function(scheduleId, schedule) {
  var $schedule;
  var buttonId = 'schedule_button_'+ scheduleId;
  $schedule = $(
  '<tr data-id="' + scheduleId + '">' +
  '<td><div class="hue-schedule schedule-name"><h4>' + schedule.name + '</h4></div></td>' + 
  '</tr>');
  console.log(schedule);

  $button = $(
  '<a class="btn btn-app js-hue-schedule" href="#"><i class="fa fa-calendar-o"></i>' + schedule.name + '</a>')

  $(this).append($schedule);
  $(this).append($button);

  $(this).append($button);
  if (schedule.status == 'enabled') $button.addClass('bg-yellow');
  $button.click(function() {
    $(this).setSchedule(scheduleId, schedule);
  });
}

$.fn.setSchedule = function(scheduleId, schedule) {
  var scheduleId = scheduleId;
  var status = (schedule.status == 'enabled' ? 'disabled' : 'enabled');
  schedule.status = status;
  console.log(status);
  var url = getHueApiBaseUrl() + '/schedules/' + scheduleId;
  var data = {"status": status}

  var $button = $(this)

  $.ajax({
    'url': url,
    'type': 'put',
    'data': JSON.stringify(data),
    'success': function(data) {
      console.log(data);
      if (schedule.status == 'disabled') $button.removeClass('bg-yellow');
      else $button.addClass('bg-yellow')
    }
  })
}

function getHueApiBaseUrl() {
  var hue_user = getHueUser();
  var hue_ip = $('.js-hue-config').data('hue-ip');
  if (hue_user && hue_ip) {
    return 'http://' + hue_ip + '/api/' + hue_user;
  }
  return false;
}

function getHueUser() {
  if ($('.js-hue-config')) {
    return $('.js-hue-config').data('hue-user');
  }
  return false;
}

function getHueTemperature(temperature) {
  temperature = temperature / 100;
  return temperature.toFixed(2);
}

/**
 * Converts a value from 0-255 to a percentage.
 */
function briToPercentage(bri) { return Math.round(parseInt(bri)/255 * 100); }
function hueToPercentage(hue) { return Math.round(parseInt(hue)/65535 * 100); }
function satToPercentage(sat) { return Math.round(parseInt(sat)/254 * 100); }

/**
 * Converts a value from a percentage to 0-255.
 */
function percentageToBri(percentage) { return Math.round(parseInt(percentage)/100 * 255); }
function percentageToHue(percentage) { return Math.round(parseInt(percentage)/100 * 65535); }
function percentageToSat(percentage) { return Math.round(parseInt(percentage)/100 * 254); }
