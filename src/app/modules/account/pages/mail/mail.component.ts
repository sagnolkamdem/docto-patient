import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.scss']
})
export class MailComponent implements OnInit {

  people: string[] = ['Mohamed'];
  allPeople: string[] = ['John Doe', 'Jane Doe', 'Steve Job', 'Mark Z.', 'Mohamed'];

  isOpened = false;
  isCreated = true;
  isLoading = true;

  quillConfig = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      ['blockquote', 'code-block'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ color: [] }, { background: [] }],
      ['link'],
      ['clean'],
    ]
  };

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }

  openMessage() {
    this.isCreated = false;
    this.isOpened = !this.isOpened;
  }

  createMessage() {
    this.isOpened = false;
    this.isCreated = !this.isCreated;
  }

  add(value: any): void {
    const index = this.people.indexOf(value);

    if (index < 0) {
      this.people.push(value);
    }
  }

  remove(person: any): void {
    const index = this.people.indexOf(person);

    if (index >= 0) {
      this.people.splice(index, 1);
    }
  }

}
