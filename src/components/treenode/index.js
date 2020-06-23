import React from "react";
import Checkbox from "../checkbox";
import { MdKeyboardArrowDown } from "react-icons/md";

const TreeNode = ({ node, handleChecked, handleExpandCollapse }) => (
  <li onClick={() => handleChecked(node)}>
    <Checkbox
      checked={!!node.checked}
      label={node.name}
      name="node"
      onChange={() => handleChecked(node)}
    />
    <span
      onClick={event => {
        event.stopPropagation();
        handleExpandCollapse(node);
      }}
    >
      {Object.keys(node.children).length > 0 && (
        <i>
          {node.expanded ? (
            <MdKeyboardArrowDown size={22} className="rotate-180" />
          ) : (
            <MdKeyboardArrowDown size={22} className="rotate-0" />
          )}
        </i>
      )}
    </span>
  </li>
);

export default TreeNode;
