            <?php

			$name = $_POST["your-name"];

			$email = $_POST["your-email"];

			$subject = $_POST["subject"];

			$message = $_POST["message"];
			$message = wordwrap($message, 70, "\r\n");

			$headers = 'From: '.$email. "\r\n" .
					   'Reply-To: '.$email . "\r\n" .
					   'X-Mailer: PHP/' . phpversion();

			mail('arankhanna@college.harvard.edu', $subject, "From " . $name . ":\n" . $message, $headers);

			
			header( 'Location: http://www.arankhanna.com/' ) ;

            ?>
			
			