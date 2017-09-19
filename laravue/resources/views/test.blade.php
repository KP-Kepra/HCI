<!doctype html>
<html lang="{{ app()->getLocale() }}">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Test</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.3.1/css/bulma.min.css">
    <link href="{{asset('css/app.css')}}" rel="stylesheet" type="text/css">
    <link href="{{asset('css/app-custom.css') }}" rel="stylesheet" />
    <script src="https://unpkg.com/vue/dist/vue.js"></script>
  </head>

  <body>
    <div class="container" id="app">
      <agile :arrows="false" :infinite="false">
        <div class="slide slide--1"><h3>slide 1</h3></div>
        <div class="slide slide--2"><h3>slide 2</h3></div>
        <div class="slide slide--3">


        <input type="radio" v-on:click="changeView(1)" value="v-a" id="a" name="view">
        <label>A</label>
        <input type="radio" v-on:click="changeView(2)" value="v-b" id="b" name="view">
        <label>B</label>


<transition name="component-fade" mode="out-in">
  <component v-bind:is="view"></component>
</transition>


</div>
        <div class="slide slide--4"><h3>slide 4</h3></div>
        <div class="slide slide--5"><h3>slide 5</h3></div>
      </agile>
      <nav-bar></nav-bar>
    </div>
        
    <!-- CSRF -->
    <script>
      window.Laravel = <?php echo json_encode([
      'csrfToken' => csrf_token(),
      ]); ?>
    </script>
        
    <script src="{{asset('js/app.js')}}"></script>
  </body>
</html>