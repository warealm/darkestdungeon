import {DungeonInfo} from "./static/DungeonInfo";
import {LevelInfo} from "./static/LevelInfo";
import {AfflictionInfo} from "./static/AfflictionInfo";
import {CharacterClassInfo} from "./static/CharacterClassInfo";
import {ItemInfo} from "./static/ItemInfo";

export class StaticState  {
  // noinspection TsLint
  private static _instance: StaticState;
  public static get instance () {
    return StaticState._instance || (StaticState._instance = new StaticState());
  }

  private constructor () {}

  heroNames: string[] = [];
  items = new Map<string, ItemInfo>();
  heroClasses = new Map<string, CharacterClassInfo>();
  afflictions = new Map<string, AfflictionInfo>();
  levels = new Map<number, LevelInfo>();
  dungeons = new Map<string, DungeonInfo>();

  // Glue to provide a lookupFn interface for serializr
  public static lookup<K, V> (getLookup: (i: StaticState) => Map<K, V>) {
    return (id: K, resolve: (e: any, r: any) => void) => {
      resolve(null, getLookup(StaticState.instance).get(id));
    };
  }
}
