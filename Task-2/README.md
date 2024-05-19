# Steps to create a sample snap-in template

* Install the neccessary modules like DevRev CLI, jq and DevRev SDK

* Login to Devrev via CLI for authentication. The following command is used:
    
    devrev profiles authenticate -o <dev-org-slug> -u <youremail@yourdomain.com> 

* Initialize snap-in template

    devrev snap_in_version init

* After this a sample snap-in template is created. It contains a folder called code, a manifest.yaml file and a Readme file. The required snap-in are created from this sample template.

* If we wanted to do any changes like creating a hello-world function we have to make neccessary changes in the manifest file as well as create function folder inside code/src file. The required modules are installed, run and built. We get a build.tgz file. 

* The the snap-in package and versions are created. Finally, the snap-in is deployed.




