job('Job-apptienda') {
    description('Job Padre para crear una tarea Hija que despliegue la App de la tienda')
    scm {
        git('https://github.com/jacfpentester/tienda-frontend.git', 'master'){ 
            node -> 
                node / gitConfigName('jose antonio')
                node / gitConfigEmail('jacfpentester@gmail.com')
        }
    }
    triggers {
     //   scm('H/5 * * * *')
        githubPush()
    }
    
    // steps {
    //     shell("bash ./pCine/build/install.sh")
    // }
}