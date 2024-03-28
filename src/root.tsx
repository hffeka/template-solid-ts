/* @refresh reload */
import { render } from "solid-js/web";
import { Router, Route } from "@solidjs/router";
import "./root.css";
import Index from "$routes/Index";

render(
	() => (
		<Router>
			<Route path="/" component={Index} />
		</Router>
	),
	document.getElementById("root")!,
);
