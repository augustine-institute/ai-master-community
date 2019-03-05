@Create_delete_Comments_Replies
Feature: This file will test the Formed Community to Create delete Comments Replies
  As a user of FORMED, I should be able to go to the homepage and
  assert that all the elements are there

  Background:
    Given I navigate to "/"

  # from at document
  Scenario: Cretae and delete comments and replies
  When FCF-0010 navigate to community page
  Then FCF-0010 Enter Parish user name and password
  Then FCF-0020 Feature and group tab in dashboard menu
  When FCF-0030 naviagte to listen link and click on audio books
  Then FCF-0040 click on image in audio books
  Then FCF-0050 click on create feature and discussion group
  Then FCF-0120 click on Discussion group
  Then FCF-0120 Click on create discussion group
  Then FCF-0120 click on View group
  Then FCF-0130 click on edit button
  Then FCF-0130 click on managesessions and create a session using Youtube
  When FCF-0290 click on New button in Discussion prompts for this session
  When FCF-0130 click on save button
  Then FCF-0290 Click on Visit group
  Then FCF-0170 Click on group roster and verify
  When FCF-0180 Click on session
  Then FCF-0190 click on Comments
  When FCF-0190 Click on New Comments
  Then FCF-0200 likes and replay buttons are dispalyed
  When FCF-0210 click on likes and replay buttons
  When FCF-0210 enter the text in replay textarea
  Then FCF-0220 click on Edit comment button
  When FCF-0210 enter the text in replay textarea
  Then FCF-0290 delete the Comments
  Then FCF-0230 click on Return to the session
  When FCF-0240 click on Return to the formed link
  








  
  


