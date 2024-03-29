import { Component, OnInit } from '@angular/core';
import { DashboardTabs } from 'src/app/shared/components/tabs/dashboard-tabs/interfaces/dashboard-tabs.interface';

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
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
  styles: [
    `.active{
      border-color: #50D6B6 !important,
    }`
  ]
})
export class TeamComponent implements OnInit {

  tabs: DashboardTabs[] = [
    {
      name: "Chats",
      link: "/account/team/chats"
    },
    {
      name: "Communautés",
      link: "/account/team/communities"
    }
  ]

  currentConversation!: Conversation;
  showResponsiveDiscussion: boolean = false;

  conversations: Conversation[] = [
    {
      id: 1,
      interlocutor: "Mohamed",
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
      interlocutor: "Mohamed",
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
      interlocutor: "Mohamed",
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
      interlocutor: "Mohamed",
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
    {
      id: 5,
      interlocutor: "Mohamed",
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
    {
      id: 6,
      interlocutor: "Mohamed",
      messages: [
        {
          text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel inventore eius expedita explicabo minima nobis sit sint temporibus atque ut.",
          status: "received",
        }
      ],
      status: "old",
    },
  ];

  constructor() { }

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
