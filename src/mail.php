<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

if (isset($_POST['action']) && $_POST['action'] == 'send_feedback') {
    $validationError = false;
    $userName = $_POST['name'] ? trim($_POST['name']) : '';
    $userEmail = $_POST['email'] ? trim($_POST['email']) : '';
    $userMessage = $_POST['message'] ? trim($_POST['message']) : '';

    if (
        $userName == ''
        || $userEmail == ''
        || !filter_var($userEmail, FILTER_VALIDATE_EMAIL)
        || $userMessage == ''
        || isset($_COOKIE['FeedbackSended'])
    )  {
        $validationError = true;
    }

    if (!$validationError) {
        require 'lib/PHPMailer/src/PHPMailer.php';
        require 'lib/PHPMailer/src/Exception.php';
        require 'lib/PHPMailer/src/SMTP.php';

        $from = 'user@mail.com';
        $to = 'user@mail.com';

        $mail = new PHPMailer();
        $mail->isSMTP();
        $mail->Host = 'smtp.mail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'user@mail.com';
        $mail->Password = 'pass';
        $mail->SMTPSecure = 'ssl';
        $mail->Port = '465';
        $mail->CharSet = 'UTF-8';
        $mail->setFrom($from);
        $mail->addAddress($to);
        $mail->isHTML (true);
        $mail->Subject = 'ВИДЕОСЪЁМКА НЕДВИЖИМОСТИ';
        $mail->Body = "
            <html>
                <body>
                    <p>Имя отправителя: $userName</p>
                    <p>Адрес отправителя: $userEmail</p>
                    <p>Содержание сообщения: $userMessage</p>
                </body>
            </html>
        ";
        $mail->AltBody = $userMessage;
        $mail->SMTPDebug = 0;

        if ($mail->send()) {
            setcookie("FeedbackSended", 'true', time() + 20, '/');
        }
    }
}
