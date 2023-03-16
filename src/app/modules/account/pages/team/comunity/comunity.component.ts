import { Component, OnInit } from '@angular/core';

type Message = {
  text: string,
  status: "received" | "send"
}

type Conversation = {
  id: number,
  interlocutor: string;
  messages: Message[],
  status: "new" | "old",
  howMuch?: number
}

@Component({
  selector: 'app-comunity',
  templateUrl: './comunity.component.html',
  styleUrls: ['./comunity.component.scss']
})
export class ComunityComponent implements OnInit {

  currentConversation!: Conversation;
  showResponsiveDiscussion: boolean = false;

  conversations: Conversation[] = [
    {
      id: 1,
      interlocutor: "Pédiatrie",
      messages: [
        {
          text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel inventore eius expedita explicabo minima nobis sit sint temporibus atque ut.",
          status: "received",
        },
        {
          text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel inventore eius expedita explicabo minima nobis sit sint temporibus atque ut.",
          status: "received",
        },
        {
          text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel inventore eius expedita explicabo minima nobis sit sint temporibus atque ut.",
          status: "send",
        },
        {
          text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel inventore eius expedita explicabo minima nobis sit sint temporibus atque ut.",
          status: "received",
        },
        {
          text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel inventore eius expedita explicabo minima nobis sit sint temporibus atque ut.",
          status: "send",
        },
        {
          text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel inventore eius expedita explicabo minima nobis sit sint temporibus atque ut.",
          status: "received",
        },
        {
          text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel inventore eius expedita explicabo minima nobis sit sint temporibus atque ut.",
          status: "send",
        },
        {
          text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel inventore eius expedita explicabo minima nobis sit sint temporibus atque ut.",
          status: "received",
        },
        {
          text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel inventore eius expedita explicabo minima nobis sit sint temporibus atque ut.",
          status: "send",
        },
      ],
      status: "new",
      howMuch: 3
    },
    {
      id: 2,
      interlocutor: "Gynécologie",
      messages: [
        {
          text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel inventore eius expedita explicabo minima nobis sit sint temporibus atque ut.",
          status: "received",
        },
        {
          text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel inventore eius expedita explicabo minima nobis sit sint temporibus atque ut.",
          status: "received",
        },
        {
          text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel inventore eius expedita explicabo minima nobis sit sint temporibus atque ut.",
          status: "send",
        },
        {
          text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel inventore eius expedita explicabo minima nobis sit sint temporibus atque ut.",
          status: "received",
        },
        {
          text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel inventore eius expedita explicabo minima nobis sit sint temporibus atque ut.",
          status: "send",
        },
      ],
      status: "old",
    },
    {
      id: 3,
      interlocutor: "Psychiatrie",
      messages: [
        {
          text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel inventore eius expedita explicabo minima nobis sit sint temporibus atque ut.",
          status: "received",
        }
      ],
      status: "old",
    },
    {
      id: 4,
      interlocutor: "Dermatologie",
      messages: [
        {
          text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel inventore eius expedita explicabo minima nobis sit sint temporibus atque ut.",
          status: "received",
        },
        {
          text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel inventore eius expedita explicabo minima nobis sit sint temporibus atque ut.",
          status: "received",
        },
        {
          text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel inventore eius expedita explicabo minima nobis sit sint temporibus atque ut.",
          status: "send",
        },
      ],
      status: "old",
    },
  ];

  ngOnInit(): void {
  }

  setConversation(conversation: Conversation) {
    this.currentConversation = conversation;
    this.toggleShowResponsiveDiscussion();
  }

  toggleShowResponsiveDiscussion() {
    this.showResponsiveDiscussion = !this.showResponsiveDiscussion
  }

}
