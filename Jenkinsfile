#!/usr/bin/env groovy
@Library(['piper-lib-os']) _

try {
        // UIVeri5 tests integration to stage in the pipeline post OPA Tests
        stage('Execute Uiver5 tests') {
            node {
                deleteDir()
                measureDuration(script: this, measurementName: 'uiveri5_test_duration') {
                git 'https://github.com/SAP-samples/teched2019-opa.git'
                karmaExecuteTests script: this, failOnError: false
                }
            }
        }
    }
    
// Retrieve all errors which are thrown as an exception

catch (Throwable err) { // catch all exceptions
    globalPipelineEnvironment.addError(this, err)
    throw err
} finally {
        node{
            writeInflux script: this
        }
    
}
