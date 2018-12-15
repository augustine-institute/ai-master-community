@Repository_Filters_and_Search
Feature: RTP-003-Repository Test plan
  As a user of FORMED, I should be able to go to the homepage and
  assert that all the elements are there

  Background:
    Given I navigate to "/"

  # from at document
  Scenario: Repository Filters and Search
  Then FCF-0010 Enter Parish user name and password
  Then FCF-0020 Feature and group tab in dashboard menu
  When REPO-002-A Work Area and Template Catalog is displayed
  When REPO-002-A Click on the Template Catalog
  Then REPO-002 Filters and search are displayed
  When REPO-042 Click on USE icon and verify
  Then REPO-006 Click on Copy to Work Area
  Then REPO-003 Work area is displayed
  When REPO-002-A Click on the Template Catalog
  When REPO-004 click on Sort and verify
  Then REPO-004 Click on A to Z and verify
  When REPO-004 Click on Z to A and verify
  Then REPO-007 Click on Status All and verify Published
  When REPO-006 Select Type ALL and verify 
  Then REPO-006 Click on Group option and verify
  When REPO-004 click on Sort and verify
  Then REPO-004 Click on A to Z and verify
  When REPO-004 Click on Z to A and verify
  When REPO-006 Select Type ALL and verify
  When REPO-006 Click on Feature option and verify
  When REPO-004 click on Sort and verify
  Then REPO-004 Click on A to Z and verify
  When REPO-004 Click on Z to A and verify
  When REPO-006 Remove Filters and Verify
  Then REPO-006 click on Search icon
  







  





  







  

  
  