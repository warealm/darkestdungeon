import * as React from "react";
import {observer} from "mobx-react";
import {css, StyleSheet} from "aphrodite";
import {commonStyles} from "../config/styles";
import {Hero} from "../state/profile/Hero";

@observer
export class HeroBreakdown extends React.Component<{hero: Hero}> {
  render () {
    const c = this.props.hero;

    const afflictionItem = c.affliction && (
      <li className={css(commonStyles.afflictionText)}>
        Affliction: {c.affliction.name}
      </li>
    );

    const experience = c.level.isMax ? "MAX" : (
      <span>
        {c.relativeExperience}/{c.level.next.relativeExperience}
      </span>
    );

    return (
      <ul className={css(styles.container)}>
        <li>{c.classInfo.name} (Level {c.level.number})</li>
        <li style={{flexDirection: "row"}}>
          Resolve XP: {experience}
        </li>
        {afflictionItem}
        <li>Stress {c.stress}/{c.stressMax}</li>
      </ul>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 200
  }
});
