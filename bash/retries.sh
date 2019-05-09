#!/bin/bash

function verifyFileExists(){
	maxRetries=60
	retries=0
	sleepTime=2
	fileFound="false"

	resultFile="/var/tmp/taf/bin/result.ser"
	errorFile="/var/tmp/taf/bin/error.log"
	while [[ "$retries" -lt "$maxRetries" ]];do
		if [ -f "$resultFile" ] 
		then
			echo "$resultFile found."
			fileFound="true"
			retries=$maxRetries
		elif grep --quiet "Done no result to save" $errorFile; then
			echo "$errorFile contains \"Done no result to save\"."
			fileFound="true"
			retries=$maxRetries
		else
			echo "$resultFile not found in retry [$retries]. And error file does not contain the finish string. "
			retries=$(($retries+1))
			sleep $sleepTime
	        continue
		fi
	done

	if [ $fileFound != true ]
	then
		echo "Number of retries $retries were exeeded and file was not found"
	fi
}

verifyFileExists