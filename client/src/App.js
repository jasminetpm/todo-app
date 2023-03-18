function App() {
	return (
		<div className="App">
			<h1>Welcome, User</h1>
            <h4>Your Tasks</h4>

            <div className="todos">
                <div className="todo">
                    <div className="checkbox"></div>

                    <div className="text">Get the bread</div>

                    <div className="delete-todo">x</div>
                </div>

                <div className="todo is-complete">
                    <div className="checkbox"></div>

                    <div className="text">Get the milk</div>

                    <div className="delete-todo">x</div>
                </div>
            </div>
		</div>
	);
}

export default App;
