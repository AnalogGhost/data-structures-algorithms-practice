package main

// Node in a singly linked list
type Node struct {
	value int
	next  *Node
}

// Next returns Node n's next node
func (n *Node) Next() *Node {
	return n.next
}
