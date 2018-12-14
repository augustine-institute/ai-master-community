@Create_Feature_Vimeo_youtube_soundclound
Feature: CMM-FCF-002-Formed Community
  As a user of FORMED, I should be able to go to the homepage and
  assert that all the elements are there

  Background:
    Given I navigate to "/"

  # from at document
  Scenario: Create Feature for vimeo youtube soundcloud
  When FCF-0010 navigate to community page
  Then FCF-0010 Enter Parish user name and password
  Then FCF-0020 Feature and group tab in dashboard menu
  Then FCF-0260 click on new button and feature content option is displayed
  Then FCF-0260 Feature Editor is displayed
  When FCF-0260 create a feature using a Youtube embed code
  Then FCF-0280 Click on save button
  When FCF-0010 navigate to community page
  Then FCF-0020 Feature and group tab in dashboard menu
  Then FCF-0260 click on new button and feature content option is displayed
  Then FCF-0260 Feature Editor is displayed
  When FCF-0270 create a feature using a vimeo code
  Then FCF-0280 Click on save button
  When FCF-0010 navigate to community page
  Then FCF-0020 Feature and group tab in dashboard menu
  Then FCF-0260 click on new button and feature content option is displayed
  Then FCF-0260 Feature Editor is displayed
  When FCF-0280 create a feature using a Soundcloud embed code
  Then FCF-0280 Click on save button
  Then FCF-0070 click on Edit feature in unpublish list
  Then FCF-0070 change the name Title ,text color and click on cencle button
  Then FCF-0070 click on Edit feature in unpublish list
  Then FCF-0070 change the name Title ,text color and click on Update button
  Then FCF-0090 Delete feature
  When FCF-0070 Move a feature into the Published
  Then FCF-0080 move a published feature into unpublished list


