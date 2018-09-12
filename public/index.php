<?php
$config = [
    'appName' => 'Numerate',
    'locale' => 'ja',
    'locales' => ['ja', 'en'],
];

$polyfills = [
    'Promise',
    'Object.assign',
    'Object.values',
    'Array.prototype.find',
    'Array.prototype.findIndex',
    'Array.prototype.includes',
    'String.prototype.includes',
    'String.prototype.startsWith',
    'String.prototype.endsWith',
];
?>
<!DOCTYPE html>
<html lang="<?=$config['locale']?>">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <title><?=$config['appName']?></title>
  <link rel="stylesheet" href="/css/app.css">
</head>
<body>
    <div id="app"></div>

    <script>window.config = <?=json_encode($config)?>;</script>
    <script src="https://cdn.polyfill.io/v2/polyfill.min.js?features=<?=implode(',', $polyfills)?>"></script>
    <script src="/js/manifest.js"></script>
    <script src="/js/vendor.js"></script>
    <script src="/js/app.js"></script>
</body>
</html>
