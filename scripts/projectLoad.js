window.project = document.createElement('project-card');

window.project.setAttribute('title', 'AI Song Genre Predictions');
window.project.setAttribute('date', 'September, 2024 - December, 2024');
window.project.setAttribute('link', 'https://github.com/brandoluu/CSE_151A_Project');
window.project.setAttribute('description', `In this project me and my team used various utilized various machine learning methods such <abbr>SVMs</abbr> 
                                            (<i>Support Vector Machines</i>), <abbr>KNN</abbr> (<i>K-Nearest Neighbors</i>), and <i>Decision Trees</i> to create a 
                                            machine learning model that could predict the genre of a song given various metrics of that song 
                                            such as the length of the song, the number of instrument, and tempo changes.`);
window.project.setAttribute('img', '/assets/KNN.webp');
window.project.setAttribute('imgAlt', 'Visualization of results from K-Nearest Neighbors model with PCA');
window.project.setAttribute('imgHeight', '400');
window.project.setAttribute('imgWidth', '600');
document.querySelector('main').appendChild(window.project);

window.project = document.createElement('project-card');
window.project.setAttribute('title', 'SayIt Assistant');
window.project.setAttribute('date', 'April, 2023 - June, 2023');
window.project.setAttribute('link', 'https://github.com/ucsd-cse110-sp23/cse-110-project-team-13');
window.project.setAttribute('description', `In this project me and my time utilized ChatGPT to create an AI assistant application. This application
                                            utilized voice recognition software to easy hands-free answering from the assistant. Along with this the
                                            application saved the user's questions and their answers allowing for easy future review.`);
window.project.setAttribute('img', '/assets/app.webp');
window.project.setAttribute('imgAlt', 'Main Screen of App');
window.project.setAttribute('imgHeight', '400');
window.project.setAttribute('imgWidth', '600');
document.querySelector('main').appendChild(window.project);