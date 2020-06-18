<?php
$availableLocales = [
    'en',
    'ru',
    'ua'
];

$urlParams = trim(parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH), '/');
$pattern = '/^(?<locale>'. implode('|', $availableLocales). ')?$/';
preg_match($pattern, $urlParams, $params);

if ($params['locale']) {
    $locale = $params['locale'];
}
