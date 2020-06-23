import React, { useEffect, useState } from "react";
import TreeNode from "../treenode";

const TreeView = ({ data }) => {
  const [nodes, setNodes] = useState(data);

  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(nodes));
  }, [nodes]);

  const getNodeClassName = node => {
    if (node.visible || node.level === 0) return "visible";
    else return "closed";
  };

  const handleCheckChildren = (node, parentChecked) => {
    Object.values(node).forEach(item => {
      if (Object.keys(item.children).length > 0) {
        item.checked = parentChecked;
        return handleCheckChildren(item.children, parentChecked);
      }

      item.checked = parentChecked;
      return item;
    });
  };

  const handleChecked = node => {
    node.checked = !node.checked;

    if (Object.keys(node.children).length > 0) {
      handleCheckChildren({ node }, node.checked);
    }

    setNodes({ ...nodes });
  };

  const handleExpandCollapse = node => {
    const { children } = node;
    Object.values(children).forEach(item => (item.visible = !item.visible));
    node.expanded = !node.expanded;
    setNodes({ ...nodes });
  };

  const renderNodes = nodes =>
    Object.values(nodes).map(node => {
      if (Object.keys(node.children).length > 0) {
        return (
          <ul key={node.id} className={getNodeClassName(node)}>
            <TreeNode
              node={node}
              handleChecked={handleChecked}
              handleExpandCollapse={handleExpandCollapse}
            />
            {renderNodes(node.children)}
          </ul>
        );
      }

      return (
        <ul key={node.id} className={getNodeClassName(node)}>
          <TreeNode
            node={node}
            handleChecked={handleChecked}
            handleExpandCollapse={handleExpandCollapse}
          />
        </ul>
      );
    });

  return renderNodes(nodes);
};

export default TreeView;
