<?php //型を宣言したファイルを継承 ?>
@extends('common.layout')

<?php //@yeild()に代入する@section()が宣言されているファイルをinclude ?>
@include('common.header')
@include('common.footer')

<?php //@yeild()に代入する@section()を定義 ?>
@section('content')
    <div id="app">
        <script src="{{mix('js/app.js')}}"></script>
    </div>
@stop
