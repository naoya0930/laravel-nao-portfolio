@section('header')
<!DOCTYPE html>
<html lang="ja">
<head>
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta charset="utf-8">
<title>Laravel-Testing</title>
<meta name="description" content="This is the site of Laravel-Testing">
<meta name="author" content="">
<meta name="robots" content="noindex">
<!--アイコンの設定-->
<!--<link rel="shortcut icon" href="ファイル名.ico">-->
<!--スマホでの見え方を調整-->
<meta name="viewport" content="width=device-width,initial-scale=1">
@yield('addCss')
<!--[if lt IE 9]>
<script src="//cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.2/html5shiv.min.js">
<script src="//cdnjs.cloudflare.com/ajax/libs/respond.js/1.4.2/respond.min.js">
<![endif]-->
@if(app('env')=='local')
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">
@endif
@if(app('env')=='production')
    <link rel="stylesheet" href="{{ secure_asset('css/style.css') }}">
@endif
</head>
<body>
@stop