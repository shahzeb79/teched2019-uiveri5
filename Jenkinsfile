#!/usr/bin/env groovy
@Library(['piper-lib-os']) _

        // UIVeri5 tests integration to stage in the pipeline post OPA Tests
        stage('Execute Uiver5 tests') {
            node {
                git 'https://github.com/SAP-samples/teched2019-opa.git'
                karmaExecuteTests script: this, failOnError: false
                }
            
        }
    
    

