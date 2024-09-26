// @flow

declare module '@/components' {
	declare export const OrdersFilterOpened: React.ComponentType<{
		open: boolean;
		dialog: boolean;
		filters: any[];
	}>;
	declare export const Layout: React.ComponentType<{
		children: React.Node;
		buttons?: any[];
		title?: string;
		theme?: string;
		avatar?: { title: string };
	}>;
	declare export const OrdersFilterClosed: React.ComponentType<{
		open: boolean;
		filters: any;
		dialog: boolean;
	}>;
	declare export const Footer: React.ComponentType<{}>;
	declare export const OrderVersion: React.ComponentType<{
		filters: any;
	}>;
	declare export const Order: React.ComponentType<{}>;
	declare export const OrderPreview: React.ComponentType<{}>;
	declare export const OrderTabs: React.ComponentType<{
		items: any;
	}>;
	declare export const OrderContainer: React.ComponentType<{
		children: React.Node;
	}>;
	declare export const OrderListItem: React.ComponentType<{
		data?: any | null;
	}>;
	declare export const ThemeWrapper: React.ComponentType<{
		children: React.Node;
	}>;
	declare export const OrdersFilterProvider: React.ComponentType<{
		children: React.Node;
	}>;
	declare export const FiltersSearchListContainer: React.ComponentType<{
		children: React.Node;
	}>;
	declare export const FiltersSearchListItem: React.ComponentType<{
		listData: any | null;
	}>;
	declare export const OrderListPreviewContainer: React.ComponentType<{
		children: React.Node;
		height: number;
	}>;
	declare export const OrderListContainer: React.ComponentType<{
		children: React.Node;
	}>;
	declare export const TimeWidgetsPanel: React.ComponentType<{}>;
	declare export const PersonWidget: React.ComponentType<{
		userRole: string;
		fio: string;
	}>;
	declare export const TextFieldWidget: React.ComponentType<{
		text: string;
	}>;
	declare export const TimeWidgets1: React.ComponentType<{
		date: string;
	}>;
	declare export const TimeWidgets2: React.ComponentType<{
		fullDate: any;
	}>;
	declare export const TimeWidgets3: React.ComponentType<{
		fullDate: any;
	}>;
	declare export const TimeWidgets4: React.ComponentType<{
		fullDate: any;
	}>;
	declare export const TimeWidgets5: React.ComponentType<{
		fullDate: any;
	}>;
	declare export const TimeWidgets6: React.ComponentType<{
		fullDate: any;
	}>;
	declare export const TimeWidgets7: React.ComponentType<{
		fullDate: any;
	}>;
	declare export const TimeWidgets8: React.ComponentType<{
		fullDate: any;
	}>;
	declare export const TimeWidgetsCustomClock: React.ComponentType<{}>;
	declare export const TimeWidgetsDateWithTimeBlock: React.ComponentType<{
		fullDate: any;
	}>;
	declare export const TimeWidgetsDaysPanel: React.ComponentType<{}>;
	declare export const TimeWidgetsWeeksAndYearsPanel: React.ComponentType<{}>;
	declare export const TimeWidgetsWithPerson: React.ComponentType<{
		fullDate: any;
		userRole: string;
		fio: string;
	}>;
	declare export const TimeWidgetsWithTextField1: React.ComponentType<{
		fullDate: any;
	}>;
	declare export const TimeWidgetsWithTextField2: React.ComponentType<{
		fullDate: any;
	}>;
	declare export const TimeWidgetsWithTextField3: React.ComponentType<{
		fullDate: any;
	}>;
	declare export const Welcome: React.ComponentType<{
		children: React.Node;
		buttons: any[];
	}>;
	declare export const WelcomeAuthButtons: React.ComponentType<{
		children: React.Node;
	}>;
	declare export const WelcomeButton: React.ComponentType<{
		title: string;
		onClick: () => void;
	}>;
	declare export const FourImagesBg: React.ComponentType<{
		imagesUrls: { id: number; url: string }[];
		children: React.Node;
	}>;
	declare export const SingleImageBg: React.ComponentType<{
		imageUrl: string;
		children: React.Node;
	}>;
	declare export const OrdersFilterDesktopDialog: React.ComponentType<{}>;
	declare export const OrdersFilterMobileDialog: React.ComponentType<{}>;
}

