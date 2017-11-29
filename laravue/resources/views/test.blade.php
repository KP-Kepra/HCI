<!doctype html>
<html lang="{{ app()->getLocale() }}">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Test</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.3.1/css/bulma.min.css">
    <link href="{{asset('css/app.css')}}" rel="stylesheet" type="text/css">
    <link href="{{asset('css/app-custom.css')}}" rel="stylesheet" />
    <link href="{{asset('css/hover-custom.css')}}" rel="stylesheet" />
    <link href="{{asset('css/navigation.css')}}" rel="stylesheet" />
    <script src="https://unpkg.com/vue/dist/vue.js"></script>
  </head>

  <body>
    <div class="container" id="app">
      <agile :arrows="false" :infinite="false">
        <div class="slide slide--1"><home></home></div>
        <div class="slide slide--2"><about></about></div>
        <div class="slide slide--3"><timeline></timeline></div>
        <div class="slide slide--4"><blog></blog></div>
        <div class="slide slide--5"><contact></contact></div>
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