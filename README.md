#                                         TriviaGame
										jQuery Timers exercise

###                                         Option Two: Advanced Assignment
###                                     (Timed Questions)
### 
### ### ### ### ### ### ### 
									The TriviaGame repo accomplishes the
								following:

										* Is generates a trivia game that
									shows only one question until the player
									answers it or their time runs out.

										* If the player selects the correct
									answer, the program displays a screen
									congratulating them for choosing the
									right option. After a few seconds, it
									displays the next question without user
									input.

										* The scenario is similar for wrong
									answers and time-outs.

										* If the player runs out of time, the
									player is told that time's up the correct
									answer is displayed. After a few seconds,
									the next question is shown.

									  	* If the player chooses the wrong
								  	answer, the player is tols an incorrect
								  	answer has been selected. After a few
								  	seconds, the next question is shown.

										* On the final screen, show the
									number of correct answers, incorrect
									answers, and an option to restart the
									game (without reloading the page).

									About the Project Submitted:

									I designed all of the triva information
								(questions, possible answers, correct answer,
								and images) to all be contained in an array
								of objects. This would make it easy to add
								future questions ann minimize problems that
								could arise from multiple lists.


									Key to making the game work is
								dynamically creating elements around a
								central html framework for each part of the
								game (start, display of questions, display of
								answers, and game summary) and removing them
								at the right time.

								In the question portion of the game, each
							possible answer is encoded into a "value" within
							the div. When a user clicks on the answer, that
							value is then directly compared to the correct
							answer.

									The game is similar to the slideshow
								exercise that we did in class and involved
								setting an interval for the display of
								questions, and a limited timeout for the
								display of answers.

								This was an exercise in creating an entry
							point at the start of a cycle of questions and
							answers and also providing an exit point once all
							the questions had been asked. The later was
							accomplished by keeping track of the questions
							through a counter variable. Given that there are
							three outcomes to each question (right, wrong, no
							answer) it was neccessary to make sure that these
							different outcomes all converged back to the same
							point. This was done by modifying the stop
							function which controls the timer in each case.
							Here the stop function also calls the display
							answer function. The display answer function then
							uses the amount of time left on the timer and a
							comparison beteeen the chosen and correct answers
							to display the appropriate message via a series
							of if-else-if statements.
