import { Component} from '@angular/core';
import { FormBuilder,Validators,FormGroup, ReactiveFormsModule} from '@angular/forms';
import { PostService } from '../serveses/post/post.service';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent{
  userForm:FormGroup;

// check  if the form is valid or not
  constructor(private FBuilder: FormBuilder, public postService: PostService) {
    this.userForm = this.FBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.pattern(/^[\d]{10}$/)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });

  }
// form sahi hone par submit  krdo 
  onSubmit() {
    // Handle form submission logic here
    //console me dekhne ke liye
    console.log(this.userForm); //console  log for checking values of all fields
    // Example: log form data for debugging or sending to server
    // You can add further validation or data processing before submission
    if (this.userForm.valid) {
      const formData = this.userForm.value; // Extract form data

      this.postService.submitPost(formData).subscribe(response => {
          // Handle successful response (e.g., reset form, show success message)
          console.log('Post submitted successfully!', response);
          this.userForm.reset(); // Reset form after successful submission my form 
        }, error => {
          // Handle API errors (e.g., display error message)
          console.error('Error submitting post:', error);
        });
    }
    
  }
}



 