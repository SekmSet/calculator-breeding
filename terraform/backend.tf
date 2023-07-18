terraform {
  backend "gcs" {
    bucket  = "terraform-backend-deploy-276111"
    prefix  = "terraform/calculator-cat"
  }
}