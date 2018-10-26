@Create_delete_Comments_Replies
Feature: This file will test the Formed Community to Create delete Comments Replies
  As a user of FORMED, I should be able to go to the homepage and
  assert that all the elements are there

  Background:
    Given I navigate to "/"

  # from at document
  Scenario: Cretae and delete comments and replies
  When FCF-0020 navigate to community page and Enter parish user name details
  When FCF-0170 Click on visit group and click on group roster
  When FCF-0180 click on New Post
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
  Then click on logout button in community page
  Then FCF-0250 individual user community page is displayed
  When FCF-0250 navigate to community page
  When click on logout button in community page individual user
  


  
  


