import React, { Component } from "react";
import { Text, View } from "react-native";
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
  AccordionList,
} from "accordion-collapse-react-native";
import { Separator } from "native-base";
export default class UpcomingQuestsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          title: "Getting Started",
          body: "React native Accordion/Collapse component, very good to use in toggles & show/hide content",
        },
        {
          title: "Components",
          body: "AccordionList,Collapse,CollapseHeader & CollapseBody",
        },
      ],
      _head(item) {
        return (
          <Separator bordered style={{ alignItems: "center" }}>
            <Text>{item.title}</Text>
          </Separator>
        );
      },

      _body(item) {
        return (
          <View style={{ padding: 10 }}>
            <Text style={{ textAlign: "center" }}>{item.body}</Text>
          </View>
        );
      },
    };
  }
  render() {
    return (
      <View>
        <Collapse>
          <CollapseHeader>
            <View>
              <Text>Click here</Text>
            </View>
          </CollapseHeader>
          <CollapseBody>
            <Text>Ta daa!</Text>
          </CollapseBody>
        </Collapse>
        <AccordionList
          list={this.state.list}
          header={this._head}
          body={this._body}
          keyExtractor={(item) => item.title}
        />
      </View>
    );
  }
}
