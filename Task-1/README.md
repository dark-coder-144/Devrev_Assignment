<<<<<<< HEAD
# Steps to create a work-item using Devrev API

* Log in to your Devrev Account

* Create a Personal Access Token from Settings -> Accounts -> Personal Access Token

* Create a file called display_user_info.js file 

* The following function is written

![Code Snippet](<Screenshot 2024-05-19 181806.png>)

* In the above code, we have made use of axios to get the required data using Devrev API. We have used GET Method. Use of PAT is used here. The required modules are installed required for the execution of the program.

* On Execution, we get the following output

![Here, the ID of the owner is retrieved and used in the next step](<Screenshot 2024-05-16 113339.png>)

* The required information is retrieved and used for creation of work item

* A new file called create_work_item.js is created

* Here we have created a issue using the following code snippet

![Code Snippet](<Screenshot 2024-05-19 182205.png>)

* In the above code, we make use of the owner_id retrieved from display_user_info. We also make use of PAT for execution. To determine which Part of the product has to create issue we mention the ID of it, so that issue can be created from that. Additionally, the title and description of the issue is noted. We make use of POST method this time to create the work item using axios. 

* On execution we get the following output

![An issue is created with title, body, priority depending on which part we have used](<Screenshot 2024-05-16 113225.png>)

* Thus a work item is created using Devrev API! 

* References
    * API Documentation
    * DevRev Docs
=======
# Steps to create a work-item using Devrev API

>>>>>>> 7827a5365fbf4022366817866b02c75abd4219bc
