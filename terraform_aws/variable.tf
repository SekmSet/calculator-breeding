variable "location" {
  type = string
  description = "Location to deploy Ex: eu-west-3"
}

variable "project" {
  type = string
  description = "GCP ID project Ex: tokyo-rain-123"
}

variable "port" {
  type = number
  description = "Using PORT Ex: 8000"
}

variable "image_name" {
  type = string
  description = "Name of your image"
}

variable "image_tag" {
  type = string
  description = "Tag of your image"
}

variable "tf_version" {
  type = string
  description = "Version Terraform that you are using"
}

variable "access_key" {
  type = string
  description = ""
}

variable "secret_key" {
  type = string
  description = ""
}



