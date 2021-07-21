<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    
    <link rel="stylesheet" type="text/css" href="{{ asset('css/app.css') }}">

    <title>Laravel Vue SPA</title>

    <style>
        body{
            font-family: sans-serif;
            margin: 15%
        }
    </style>
</head>
<body>
    {{-- wadah vue js --}}
    <div id="app">
        {{-- memanggil data dari file resources/js/app.js --}}
        {{-- tanda + untuk penggabungan string --}}
        <h1 v-text="'Hello, ' +title"></h1> 
        <header-component></header-component>
        <router-view></router-view>
        <footer-component></footer-component>
    </div>

    {{-- diarahkan ke dalam folder js app di resources --}}
    <script src="{{ asset('js/app.js') }}"></script>
</body>
</html>