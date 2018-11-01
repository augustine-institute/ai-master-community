@one_Click_Group_Create_Youtube_Delete_session
Feature: CMM-FCF-005-Formed Community
  As a user of FORMED, I should be able to go to the homepage and
  assert that all the elements are there

  Background:
    Given I navigate to "/"

  # from at document
  Scenario: one click group create youtube and Delete session
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
  When FCF-0130 click on save button
  Then FCF-0130 click on edit button
  Then FCF-0140 create another session
  Then FCF-0140 click on dropdown from manage sessions
  Then FCF-0140 Manage session  dropdown is displayed
  Then FCF-0140 click on oraganize sessions
  Then FCF-0150 delete the session



  















  
  
 
