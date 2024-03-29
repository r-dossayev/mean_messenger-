import {User} from "../../models/user.model";
import {createReducer, on} from "@ngrx/store";

import * as OtherActions from './other.actions';
import {Chat} from "../../models/chat.model";
import {setJoinRoom} from "./other.actions";

export interface OtherState {
  chats: Array<Chat>
  loading: boolean;
  error: string | null;
  selectedUser: User | null;

  chatRoom: string | null;
}

export const initialPostState: OtherState = {
  chats: [],
  loading: false,
  error: null,
  selectedUser: null,
  chatRoom: null
};


export const otherReducer = createReducer(
  initialPostState,
  on(OtherActions.loadChats, state => {
    return {
      ...state,
      loading: true
    }
  }),
  on(OtherActions.loadChatsSuccess, (state, {chats}) => {
    return {
      ...state,
      chats: chats,
      loading: false,
      error: null
    }
  }),
  on(OtherActions.loadChatsFailure, (state, {error}) => {
    return {
      ...state,
      loading: false,
      error: error
    }
  }),
  on(OtherActions.createChat, (state, {chat}) => {
    return {
      ...state,
      chats: [...state.chats, chat]
    }
  }),
  on(OtherActions.selectUser, (state, {user}) => {
    return {
      ...state,
      selectedUser: user
    }
  }),
  on(OtherActions.setJoinRoom, (state, {roomId}) => {
    return {
      ...state,
      chatRoom: roomId
    }
  })
)
