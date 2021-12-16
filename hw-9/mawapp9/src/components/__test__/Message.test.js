import { render, screen } from '@testing-library/react';
import Message from "../Message";

test('renders learn react header text', () => {
    render(<Message key='1' chatID='11111111' fromUser='fromTest' toUser='toTest' msgText='test message'/>);

    expect(screen.getByText(/fromTest/i)).toBeInTheDocument();
    expect(screen.getByText(/toTest/i)).toBeInTheDocument();
    expect(screen.getByText(/test message/i)).toBeInTheDocument();
    expect(screen.getByText(/11111111/i)).toBeInTheDocument();
});