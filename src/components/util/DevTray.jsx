import BreakpointIndicator from './BreakpointIndicator'
import ChartUpdateLink from './ChartUpdateLink'


export default function DevTray() {

	return (
		<div className="fixed bottom-0 left-0 flex z-50 space-x-1">
			<BreakpointIndicator />
			<ChartUpdateLink />
		</div>
	);
}