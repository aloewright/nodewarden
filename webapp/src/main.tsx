import { render } from 'preact';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App';
import { initI18n } from './lib/i18n';
import './tailwind.css';
import './styles.css';

const RESIZE_OBSERVER_LOOP_MESSAGES = new Set([
  'ResizeObserver loop completed with undelivered notifications.',
  'ResizeObserver loop limit exceeded',
]);

function isResizeObserverLoopError(message: unknown): boolean {
  return typeof message === 'string' && RESIZE_OBSERVER_LOOP_MESSAGES.has(message);
}

function suppressResizeObserverLoopErrors(): void {
  window.addEventListener(
    'error',
    (event) => {
      if (!isResizeObserverLoopError(event.message)) return;
      event.preventDefault();
      event.stopImmediatePropagation();
    },
    true
  );

  const previousOnError = window.onerror;
  window.onerror = (message, source, lineno, colno, error) => {
    if (isResizeObserverLoopError(message)) return true;
    if (typeof previousOnError === 'function') {
      return previousOnError.call(window, message, source, lineno, colno, error);
    }
    return false;
  };
}

suppressResizeObserverLoopErrors();

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
      staleTime: 30_000,
    },
  },
});

const root = document.getElementById('root')!;

function renderApp(): void {
  render(
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>,
    root
  );
}

renderApp();

void initI18n().then(() => {
  renderApp();
});
