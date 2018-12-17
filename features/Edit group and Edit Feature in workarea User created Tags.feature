@Edit_group_and_Edit_Feature_in_Workarea_User_Created_Tags
Feature: CMM-RTP-003-Repository Test plan
  As a user of FORMED, I should be able to go to the homepage and
  assert that all the elements are there

  Background:
    Given I navigate to "/"

  # from at document
  Scenario: Edit group and Edit Feature in workarea User created Tags
  Then FCF-0010 Enter Parish user name and password
  Then FCF-0020 Feature and group tab in dashboard menu
  When REPO-002-A Work Area and Template Catalog is displayed
  When REPO-002-A Click on the Template Catalog
  When REPO-006 Select Type ALL and verify 
  Then REPO-006 Click on Group option and verify
  Then REPO-016 Click on Copy to Work Area in USE icon
  When REPO-019 Click on Edit button for group
  When REPO-002-A Click on the Template Catalog
  When REPO-006 Select Type ALL and verify
  When REPO-006 Click on Feature option and verify
  Then REPO-016 Click on Copy to Work Area in USE icon
  When REPO-019 Click on Edit button for Feature
  When REPO-002-A Work Area and Template Catalog is displayed
  When REPO-002-A Click on the Template Catalog
  When REPO-006 Select Type ALL and verify 
  Then REPO-006 Click on Group option and verify
  When REPO-017 Click on Review
  Then REPO-025 Add a Tag in Group Editor
  When REPO-006 Select Type ALL and verify
  When REPO-006 Click on Feature option and verify
  When REPO-017 Click on Review
  Then REPO-025 Add a Tag in Feature Editor
  



  
  










  

  







  





  







  

  
  
