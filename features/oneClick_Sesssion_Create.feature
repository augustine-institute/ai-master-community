@oneClick_Sesssion_Create
Feature: CMM-FCF-006-Formed Community
  As a user of FORMED, I should be able to go to the homepage and
  assert that all the elements are there

  Background:
    Given I navigate to "/"

  # from at document
  Scenario: oneClick_Sesssion_Create
  When FCF-0010 navigate to community page
  Then FCF-0010 Enter Parish user name and password
  Then FCF-0020 Feature and group tab in dashboard menu
  When FCF-0100 naviagte to read link and click on Nonfiction
  Then FCF-0100 click on create feature and discussion group
  Then FCF-0160 click on Add session to existing discussion group
  Then FCF-0160 select group and click on Addsession
  When FCF-0160 click on View group
  When FCF-0030 naviagte to listen link and click on audio books
  Then FCF-0040 click on image in audio books
  Then FCF-0050 click on create feature and discussion group
  Then FCF-0120 click on Discussion group
  Then FCF-0120 Click on create discussion group
  Then FCF-0120 click on View group
  When FCF-0070 Move a feature into the Published
  When navigate to community page
  Then FCF-0280 parish admin community page is dispalyed




 

  
  










  
