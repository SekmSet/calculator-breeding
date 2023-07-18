variable "location" {
  type = string
  description = "Location to deploy Ex: us-west1"
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