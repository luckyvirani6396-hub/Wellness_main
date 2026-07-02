import { describe, it, expect, vi, beforeEach } from 'vitest';
import axios from 'axios';
import api, { submitContactForm, submitConsultationForm, subscribeNewsletter } from '../api';

vi.mock('axios', async () => {
  const mockAxiosInstance = {
    post: vi.fn(),
    interceptors: {
      response: { use: vi.fn() },
      request: { use: vi.fn() },
    },
    defaults: { headers: { common: {} } },
  };

  return {
    default: {
      create: vi.fn(() => mockAxiosInstance),
    },
  };
});

describe('api module', () => {
  it('creates an axios instance with correct config', () => {
    expect(axios.create).toHaveBeenCalledWith(
      expect.objectContaining({
        timeout: 10000,
        headers: { 'Content-Type': 'application/json' },
      }),
    );
  });

  it('registers a response interceptor', () => {
    expect(api.interceptors.response.use).toHaveBeenCalled();
  });
});

describe('submitContactForm', () => {
  beforeEach(() => {
    vi.mocked(api.post).mockReset();
  });

  it('sends a POST request to /contact with form data', async () => {
    const data = { name: 'John', email: 'john@example.com', message: 'Hello' };
    vi.mocked(api.post).mockResolvedValue({ data: { success: true } });

    await submitContactForm(data);

    expect(api.post).toHaveBeenCalledWith('/contact', data);
  });

  it('returns the axios response', async () => {
    const mockResponse = { data: { success: true }, status: 200 };
    vi.mocked(api.post).mockResolvedValue(mockResponse);

    const result = await submitContactForm({ name: 'Test' });
    expect(result).toEqual(mockResponse);
  });
});

describe('submitConsultationForm', () => {
  beforeEach(() => {
    vi.mocked(api.post).mockReset();
  });

  it('sends a POST request to /consultation with form data', async () => {
    const data = { name: 'Jane', email: 'jane@example.com', phone: '1234567890' };
    vi.mocked(api.post).mockResolvedValue({ data: { success: true } });

    await submitConsultationForm(data);

    expect(api.post).toHaveBeenCalledWith('/consultation', data);
  });
});

describe('subscribeNewsletter', () => {
  beforeEach(() => {
    vi.mocked(api.post).mockReset();
  });

  it('sends a POST request to /newsletter with email payload', async () => {
    vi.mocked(api.post).mockResolvedValue({ data: { success: true } });

    await subscribeNewsletter('user@example.com');

    expect(api.post).toHaveBeenCalledWith('/newsletter', { email: 'user@example.com' });
  });
});
