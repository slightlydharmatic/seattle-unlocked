export interface SEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  spot: string;
  hood: string;
  cat: string;
  img: string;
  pick: boolean;
  desc: string;
  cost: string;
}

export interface Story {
  id: string;
  title: string;
  sub: string;
  time: string;
  img: string;
  tag: string;
  body?: string;
}

export interface Game {
  opponent: string;
  date: string;
  time: string;
  home: boolean;
  venue: string;
}

export interface TeamSchedule {
  name: string;
  league: string;
  venue: string;
  color: string;
  accent: string;
  logo: string;
  games: Game[];
}
