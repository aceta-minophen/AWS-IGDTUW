function EventHtmlCreation(
  newEventData,
  minutesOfMeet,
  eventNum,
  carouselImagesHtml
) {
  var CardBody = `<li>${newEventData.topic} -${newEventData.date}
							<div class="modal fade" id="modal-${eventNum}" aria-hidden="true"
								aria-labelledby="example2ModalToggleLabel" tabindex="-1">



								<div class="modal-dialog modal-dialog-centered">

									<div class="modal-content">
										<div class="modal-header" style="background: url(background.jpg); color: white">
											<h1 class="modal-title fs-5"
												style="color: white; font-size: 24px; line-height: 1.5;"
												id="example2ModalToggleLabel">
												<b>IGDTUW Cloud Club Launch and Orientation</b>
											</h1>
											<button type="button" class="btn-close" data-bs-dismiss="modal"
												aria-label="Close"></button>
										</div>
										<div class="modal-body "
											style="background: url(background.jpg); color:rgb(255, 255, 255)">
											<h6 style="color: #FF9900">Date: </h6>
											<h6>${newEventData.date}</h6>
											<h6 style="color: #FF9900">Platform: </h6>
											<h6>${newEventData.description}</h6>
											<h6 style="color: #FF9900">Guest Speaker: </h6>
											<h6>${newEventData.speaker}</h6>
											<div style="background-color:bisque; margin-bottom:15px">



												<div class="mom-slider-${eventNum}" style="width: 100%;">
                        							${carouselImagesHtml}
												</div>
											</div>
											<div class="mom">
												<h6 style="color: #FF9900">Find the minutes of meeting here: </h6>
												<ol>
                        							${minutesOfMeet}
												</ol>
											</div>
										</div>
										<div class="modal-footer">
											<button class="btn btn-primary" data-bs-dismiss="modal"
												data-bs-toggle="modal" data-bs-target="#modal-${eventNum}"
												id="backButton"
												style="background-color:#ff9900; text-align: inherit; color: white">
												<h6>Back</h6>
											</button>
										</div>
									</div>
								</div>
							</div>
							<a style="color: #FF9900; class="modalActivate" cursor: pointer;" data-bs-toggle="modal"
								data-bs-target="#modal-${eventNum}">
								<!-- Button trigger modal -->
								<b> Learn More</b>
							</a>
						</li>
						`;
  // var CardBody = `<li >${newEventData.topic} -${newEventData.date}
  //                                   <div class="modal fade" id="modal-${eventNum}" aria-hidden="true" aria-labelledby="example2ModalToggleLabel" tabindex="-1">
  //                                       <div class="modal-dialog modal-dialog-scrollable">
  //                                         <div class="modal-content">
  //                                           <div class="modal-header" style="background-color:#005276;  color: white">
  // 											<h1 class="modal-title fs-5" style="color: white; font-size: 24px; line-height: 1.5;" id="example2ModalToggleLabel">
  // 												<b>IGDTUW Cloud Club Launch and Orientation</b>
  // 											  </h1>
  //                                             <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  //                                           </div>
  //                                           <div class="modal-body " style="background-color:white; color:black" >
  //                                            <h6  style= "color: #FF9900">Date: </h6> <h6>${newEventData.date}</h6>
  // 										 <h6 style= "color: #FF9900" >Platform: </h6> <h6>${newEventData.description}</h6>
  // 										 <h6 style= "color: #FF9900" >Guest Speaker: </h6> <h6>${newEventData.speaker}</h6>
  // 										 <div style="background-color:bisque; margin-bottom:15px">
  // 										 <div class="mom-slider" style="width: 100%;">
  // 											<img src="assets/mom-carousel/banner.png" alt="event picture">
  // 											<img src="assets/mom-carousel/pic1.png" alt="pic1">
  // 											<img src="assets/mom-carousel/pic2.png" alt="pic2">
  // 											<img src="assets/mom-carousel/pic3.png" alt="pic3">
  // 											<img src="assets/mom-carousel/pic4.png" alt="pic4">
  // 										 </div>
  // 										</div>
  // 										 <div class="mom">
  // 											<h6 style= "color: #FF9900" >Find the minutes of meeting here: </h6>
  // 											<ol>${minutesOfMeet}
  // 											 </ol>
  // 										</div>
  //                                           </div>
  //                                           <div class="modal-footer">
  // 											<button class="btn btn-primary" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#example2ModalToggle" id="backButton" style="background-color:#FF9900; color: white">Back</button>
  //                                           </div>
  //                                         </div>
  //                                       </div>
  //                                     </div>
  //                                     <a style="color: #FF9900; cursor: pointer;" data-bs-toggle="modal" data-bs-target="#modal-${eventNum}">
  //                                       <!-- Button trigger modal -->
  //                                       <b> Learn More</b>
  //                                    </a></li>`;

  return CardBody;
}
