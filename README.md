# caps-cloud

## Overview

Using only AWS Services: SQS, SNS, Lambda, create a cloud version of the CAPS system

## Requirements

1. SNS Topic: pickup which will receive all pickup requests from vendors
2. SQS Queue (FIFO): packages which will contain all delivery requests from vendors, in order of receipt.
    - Subscribe this queue to the pickup topic so all pickups are ordered
3. SQS Queue (Standard) for each vendor (named for the vendor) which will contain all delivery notifications from the drivers