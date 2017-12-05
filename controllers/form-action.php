<?php
	session_start();
	error_reporting(E_ALL); ini_set('display_errors', 1);
	
	$body = '';
	
	$fname = isset($_POST['fname'])?$_POST['fname']:'';
	$email = isset($_POST['email'])?$_POST['email']:'';
	$message = isset($_POST['message'])?$_POST['message']:'';
	

	$subject ="Contact Us | Devs";
	
	$emailRec='soccerkid94.17@gmail.com';
	$msg = "";
	$msg .='<table data-module="header" data-bgcolor="Main BG" class="currentTable" align="center" width="100%" cellspacing="0" cellpadding="0" border="0" bgcolor="#FFFFFF">
	<tr>
		<td class="editable" align="center">
			<table align="center" cellspacing="0" cellpadding="0" border="0">
				<tr>
					<td align="center" width="800">
						<table class="table-inner" align="center" width="100%" cellspacing="0" cellpadding="0" border="0">
										<tr>
											<td align="center">
										<tr>
											<td height="50">
											</td>
										</tr>
										<!--headline-->
									</table>
								</td>
							</tr>
							<tr>
								<td align="center" style="background-color:#FFFFFF;">
									<table align="center" width="90%" cellspacing="0" cellpadding="0" border="0">
										<tr>
											<td height="50">
											</td>
										</tr>
										<!--content-->
										<tr>
											<td align="center">
												<table class="textbutton" style="border:0px solid #000;" align="center" cellspacing="0" cellpadding="0" border="0">
													<tr align="left">
														<td data-link-style="text-decoration:none; color:#000;" data-link-color="Content Link" data-color="Content" data-size="Content" style="font-family: \'Century Gothic\', Arial, sans-serif; color:#000000; font-size:14px; line-height: 28px;" align="center">';
																$msg .= "<table border='1' width='100%' cellpadding='5' cellspacing='5' style='border-collapse: collapse;'>";
																$msg .= "<tr><td>Full Name  </td><td>$fname</td></tr>";
																$msg .= "<tr><td>Email  </td><td>$email</td></tr>";
																$msg .= "<tr><td>Message </td><td>$message</td></tr>";
																$msg .= "</table>"	;
														$msg .='</td>
													</tr>
												</table>
											</td>
										</tr>
										<!--end content-->
										
										<tr>
											<td height="50">
											</td>
										</tr>
										<tr>
											<td height="50">
											</td>
										</tr>
									</table>
								</td>
							</tr>
							
						</table>
						<table data-module="footer" data-bgcolor="Main BG" class="currentTable" align="center" width="100%" cellspacing="0" cellpadding="0" border="0" bgcolor="#C35252">
							<tr>
								<td align="center">
									<table align="center" cellspacing="0" cellpadding="0" border="0">
										<tr>
											<td align="center" width="600">
												<table class="table-inner" align="center" width="100%" cellspacing="0" cellpadding="0" border="0">
													<tr>
														<td data-bgcolor="Container" style="border-bottom-left-radius:4px;border-bottom-right-radius:4px;border-bottom:3px solid #ecf0f1;" height="10" bgcolor="#ffffff">
														
														</td>
													</tr>
													<tr>
														<td height="25">
														</td>
													</tr>
													<tr>
														<td align="center">
															<table align="center" cellspacing="0" cellpadding="0" border="0">
																<tr>
																	<td style="font-family: europa,sans-serif; color:#ffffff; font-size:14px; line-height: 28px;" align="center">
																		Copyright 2017 &copy; Eventure. All Rights Reserved. 
																	</td>
																	
																</tr>
															</table>
														</td>
													</tr>
													<tr>
														<td height="35">
														</td>
													</tr>
												</table>
											</td>
										</tr>
									</table>
								</td>
							</tr>
						</table>
					</td>
				</tr>
			</table>
		</td>
	</tr>
</table>';

	//echo $msg;
	$headers  = 'MIME-Version: 1.0' . "\r\n";
	$headers .= 'Content-type: text/html; charset=UTF-8' . "\r\n";	
	$headers .= 'Cc: soccerkid94@gmail.com' . "\r\n";
	$headers .= 'From: Eventure <soccerkid94.gmail.com> ' . "\r\n";
	$headers .= 'Return-Path: soccerkid94@gmail.com' . "\r\n";
	
	if(mail($emailRec, $subject, $msg, $headers, '-soccerkid94.17@gmail.com')){
		//echo 'Mail Sent';
	}
	else {
		//echo "problem in sending mail!"; die;
	}
	//exit;
	header('Location: index.php?contact=yes');
?>
