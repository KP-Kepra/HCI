<!doctype html>
<html lang="{{ app()->getLocale() }}">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Test</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.3.1/css/bulma.min.css">
    <link href="{{asset('css/app.css')}}" rel="stylesheet" type="text/css">
    <style type="text/css">
      body{padding: 40px}
    </style>
    <script src="https://unpkg.com/vue/dist/vue.js"></script>
  </head>

  <body>
    <div class="container" id="app">
      <div class="columns">
        <div class="column is-one-quarter">
          <aside class="menu">
          <app-menu-list></app-menu-list>
          </aside>
        </div>
        <div class="column">
          <p class="menu-label">
            Content Section
          </p>
        </div>
      </div>
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