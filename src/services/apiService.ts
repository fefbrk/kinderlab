// API Service - Backend ile iletişim için

const API_BASE_URL = 'http://localhost:3001/api';

// Backend'den gelen kullanıcı verisi (şifre içermez)
export interface User {
  id: string;
  email: string;
  name: string;
  isAdmin: boolean;
  createdAt: string;
}

// Backend'e gönderilen kullanıcı verisi (şifre içerir)
export interface UserWithPassword {
  id?: string;
  email: string;
  name: string;
  password: string;
  isAdmin?: boolean;
  createdAt?: string;
}

export interface Order {
  id: string;
  userId: string;
  items: any[];
  totalAmount: number;
  status: 'received' | 'preparing' | 'shipping' | 'delivered';
  shippingAddress: any;
  customerName: string;
  customerEmail: string;
  createdAt: string;
}

export interface CourseRegistration {
  id: string;
  userId: string;
  courseName: string;
  registrationData: any;
  status: 'registered' | 'active' | 'completed';
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  shippingAddress: string;
  shippingCity: string;
  shippingState: string;
  shippingZipCode: string;
  billingAddress: string;
  billingCity: string;
  billingState: string;
  billingZipCode: string;
  createdAt: string;
}

export interface Contact {
  id: string;
  type: 'general' | 'support' | 'feedback' | 'partnership';
  name: string;
  email: string;
  subject: string;
  message: string;
  status: 'new' | 'reviewing' | 'answered' | 'closed';
  createdAt: string;
}

export interface BlogPostImage {
  src: string;
  alt: string;
  title?: string;
  description?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  author: string;
  publishDate: string;
  status: 'draft' | 'published';
  createdAt: string;
  updatedAt: string;
  images: BlogPostImage[];
}

export interface PressRelease {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  author: string;
  publishDate: string;
  status: 'draft' | 'published';
  createdAt: string;
  updatedAt: string;
  images: BlogPostImage[];
}

export interface MediaCoverage {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  author: string;
  publishDate: string;
  status: 'draft' | 'published';
  createdAt: string;
  updatedAt: string;
  images: BlogPostImage[];
}

export interface Event {
  id: string;
  title: string;
  description: string;
  excerpt: string;
  startDate: string;
  endDate: string;
  venueName: string;
  venueAddress: string;
  venueCity: string;
  venueState: string;
  venueZipCode: string;
  venueCountry: string;
  venueWebsite?: string;
  googleMapsLink?: string;
  organizerName: string;
  organizerWebsite?: string;
  eventWebsite: string;
  status: 'upcoming' | 'ongoing' | 'completed' | 'cancelled';
  category: string;
  imageUrl?: string;
  createdAt: string;
  updatedAt: string;
}

class ApiService {
  private async request(endpoint: string, options: RequestInit = {}) {
    const url = `${API_BASE_URL}${endpoint}`;
    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      if (!response.ok) {
        // Backend'den gelen hata mesajını al
        const errorData = await response.json().catch(() => ({}));
        const errorMessage = errorData.error || `HTTP error! status: ${response.status}`;
        throw new Error(errorMessage);
      }
      return await response.json();
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  // Kullanıcı işlemleri
  async login(email: string, password: string): Promise<User> {
    return this.request('/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
  }

  async getAllUsers(): Promise<User[]> {
    return this.request('/users');
  }

  async createUser(userData: UserWithPassword): Promise<User> {
    return this.request('/users', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  }

  async changePassword(userId: string, currentPassword: string, newPassword: string): Promise<{ message: string }> {
    return this.request(`/users/${userId}/password`, {
      method: 'PUT',
      body: JSON.stringify({ currentPassword, newPassword }),
    });
  }

  // Sipariş işlemleri
  async getAllOrders(): Promise<Order[]> {
    return this.request('/orders');
  }

  async createOrder(orderData: Omit<Order, 'id' | 'status' | 'createdAt'>): Promise<Order> {
    return this.request('/orders', {
      method: 'POST',
      body: JSON.stringify(orderData),
    });
  }

  async updateOrderStatus(orderId: string, status: Order['status']): Promise<Order> {
    return this.request(`/orders/${orderId}/status`, {
      method: 'PUT',
      body: JSON.stringify({ status }),
    });
  }

  // Kurs kayıt işlemleri
  async getAllRegistrations(): Promise<CourseRegistration[]> {
    return this.request('/registrations');
  }

  async createRegistration(registrationData: Omit<CourseRegistration, 'id' | 'status' | 'createdAt'>): Promise<CourseRegistration> {
    return this.request('/registrations', {
      method: 'POST',
      body: JSON.stringify(registrationData),
    });
  }

  async updateRegistrationStatus(registrationId: string, status: CourseRegistration['status']): Promise<CourseRegistration> {
    return this.request(`/registrations/${registrationId}/status`, {
      method: 'PUT',
      body: JSON.stringify({ status }),
    });
  }

  // Contact Us methods
  async getAllContacts(): Promise<Contact[]> {
    return this.request('/contacts');
  }

  async createContact(contactData: Omit<Contact, 'id' | 'status' | 'createdAt'>): Promise<Contact> {
    return this.request('/contacts', {
      method: 'POST',
      body: JSON.stringify(contactData),
    });
  }

  async updateContactStatus(contactId: string, status: Contact['status']): Promise<Contact> {
    return this.request(`/contacts/${contactId}/status`, {
      method: 'PUT',
      body: JSON.stringify({ status }),
    });
  }

  // Silme fonksiyonları
  async deleteUser(userId: string): Promise<{ message: string }> {
    const response = await this.request(`/users/${userId}`, {
      method: 'DELETE'
    });
    return response;
  }

  async deleteOrder(orderId: string): Promise<{ message: string }> {
    const response = await this.request(`/orders/${orderId}`, {
      method: 'DELETE'
    });
    return response;
  }

  async deleteRegistration(registrationId: string): Promise<{ message: string }> {
    const response = await this.request(`/registrations/${registrationId}`, {
      method: 'DELETE'
    });
    return response;
  }

  async deleteContact(contactId: string): Promise<{ message: string }> {
    const response = await this.request(`/contacts/${contactId}`, {
      method: 'DELETE'
    });
    return response;
  }

  // Blog post methods
  async getAllBlogPosts(): Promise<BlogPost[]> {
    return this.request('/blog');
  }

  async getBlogPost(id: string): Promise<BlogPost> {
    return this.request(`/blog/${id}`);
  }

  async createBlogPost(blogData: Omit<BlogPost, 'id' | 'createdAt' | 'updatedAt'>): Promise<BlogPost> {
    return this.request('/blog', {
      method: 'POST',
      body: JSON.stringify(blogData),
    });
  }

  async updateBlogPost(id: string, blogData: Partial<BlogPost>): Promise<BlogPost> {
    return this.request(`/blog/${id}`, {
      method: 'PUT',
      body: JSON.stringify(blogData),
    });
  }

  async deleteBlogPost(id: string): Promise<{ message: string }> {
    const response = await this.request(`/blog/${id}`, {
      method: 'DELETE'
    });
    return response;
  }

  async updateBlogPostStatus(id: string, status: BlogPost['status']): Promise<BlogPost> {
    return this.request(`/blog/${id}/status`, {
      method: 'PUT',
      body: JSON.stringify({ status }),
    });
  }

  // Blog image upload methods
  async uploadBlogImage(blogPostId: string, file: File): Promise<{ imageUrl: string; filename: string }> {
    const formData = new FormData();
    formData.append('image', file);
    
    const response = await fetch(`${API_BASE_URL}/blog/${blogPostId}/images`, {
      method: 'POST',
      body: formData,
    });
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      const errorMessage = errorData.error || `HTTP error! status: ${response.status}`;
      throw new Error(errorMessage);
    }
    
    return response.json();
  }

  async uploadTempBlogImage(file: File): Promise<{ imageUrl: string; filename: string }> {
    const formData = new FormData();
    formData.append('image', file);
    
    const response = await fetch(`${API_BASE_URL}/blog/temp/images`, {
      method: 'POST',
      body: formData,
    });
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      const errorMessage = errorData.error || `HTTP error! status: ${response.status}`;
      throw new Error(errorMessage);
    }
    
    return response.json();
  }

  // Press Release methods
  async getAllPressReleases(): Promise<PressRelease[]> {
    return this.request('/press-releases');
  }

  async getPressRelease(id: string): Promise<PressRelease> {
    return this.request(`/press-releases/${id}`);
  }

  async createPressRelease(pressReleaseData: Omit<PressRelease, 'id' | 'createdAt' | 'updatedAt'>): Promise<PressRelease> {
    return this.request('/press-releases', {
      method: 'POST',
      body: JSON.stringify(pressReleaseData),
    });
  }

  async updatePressRelease(id: string, pressReleaseData: Partial<PressRelease>): Promise<PressRelease> {
    return this.request(`/press-releases/${id}`, {
      method: 'PUT',
      body: JSON.stringify(pressReleaseData),
    });
  }

  async deletePressRelease(id: string): Promise<{ message: string }> {
    const response = await this.request(`/press-releases/${id}`, {
      method: 'DELETE'
    });
    return response;
  }

  async updatePressReleaseStatus(id: string, status: PressRelease['status']): Promise<PressRelease> {
    return this.request(`/press-releases/${id}/status`, {
      method: 'PUT',
      body: JSON.stringify({ status }),
    });
  }

  async uploadPressReleaseImage(pressReleaseId: string, file: File): Promise<{ imageUrl: string; filename: string }> {
    const formData = new FormData();
    formData.append('image', file);
    
    const response = await fetch(`${API_BASE_URL}/press-releases/${pressReleaseId}/images`, {
      method: 'POST',
      body: formData,
    });
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      const errorMessage = errorData.error || `HTTP error! status: ${response.status}`;
      throw new Error(errorMessage);
    }
    
    return response.json();
  }

  async uploadTempPressReleaseImage(file: File): Promise<{ imageUrl: string; filename: string }> {
    const formData = new FormData();
    formData.append('image', file);
    
    const response = await fetch(`${API_BASE_URL}/press-releases/temp/images`, {
      method: 'POST',
      body: formData,
    });
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      const errorMessage = errorData.error || `HTTP error! status: ${response.status}`;
      throw new Error(errorMessage);
    }
    
    return response.json();
  }

  // Media Coverage methods
  async getAllMediaCoverages(): Promise<MediaCoverage[]> {
    return this.request('/media-coverage');
  }

  async getMediaCoverage(id: string): Promise<MediaCoverage> {
    return this.request(`/media-coverage/${id}`);
  }

  async createMediaCoverage(mediaCoverageData: Omit<MediaCoverage, 'id' | 'createdAt' | 'updatedAt'>): Promise<MediaCoverage> {
    return this.request('/media-coverage', {
      method: 'POST',
      body: JSON.stringify(mediaCoverageData),
    });
  }

  async updateMediaCoverage(id: string, mediaCoverageData: Partial<MediaCoverage>): Promise<MediaCoverage> {
    return this.request(`/media-coverage/${id}`, {
      method: 'PUT',
      body: JSON.stringify(mediaCoverageData),
    });
  }

  async deleteMediaCoverage(id: string): Promise<{ message: string }> {
    const response = await this.request(`/media-coverage/${id}`, {
      method: 'DELETE'
    });
    return response;
  }

  async updateMediaCoverageStatus(id: string, status: MediaCoverage['status']): Promise<MediaCoverage> {
    return this.request(`/media-coverage/${id}/status`, {
      method: 'PUT',
      body: JSON.stringify({ status }),
    });
  }

  async uploadMediaCoverageImage(mediaCoverageId: string, file: File): Promise<{ imageUrl: string; filename: string }> {
    const formData = new FormData();
    formData.append('image', file);
    
    const response = await fetch(`${API_BASE_URL}/media-coverage/${mediaCoverageId}/images`, {
      method: 'POST',
      body: formData,
    });
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      const errorMessage = errorData.error || `HTTP error! status: ${response.status}`;
      throw new Error(errorMessage);
    }
    
    return response.json();
  }

  async uploadTempMediaCoverageImage(file: File): Promise<{ imageUrl: string; filename: string }> {
    const formData = new FormData();
    formData.append('image', file);
    
    const response = await fetch(`${API_BASE_URL}/media-coverage/temp/images`, {
      method: 'POST',
      body: formData,
    });
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      const errorMessage = errorData.error || `HTTP error! status: ${response.status}`;
      throw new Error(errorMessage);
    }
    
    return response.json();
  }

  // Event methods
  async getAllEvents(): Promise<Event[]> {
    return this.request('/events');
  }

  async getEvent(id: string): Promise<Event> {
    return this.request(`/events/${id}`);
  }

  async createEvent(eventData: Omit<Event, 'id' | 'createdAt' | 'updatedAt'>): Promise<Event> {
    return this.request('/events', {
      method: 'POST',
      body: JSON.stringify(eventData),
    });
  }

  async updateEvent(id: string, eventData: Partial<Event>): Promise<Event> {
    return this.request(`/events/${id}`, {
      method: 'PUT',
      body: JSON.stringify(eventData),
    });
  }

  async deleteEvent(id: string): Promise<{ message: string }> {
    const response = await this.request(`/events/${id}`, {
      method: 'DELETE'
    });
    return response;
  }

  async updateEventStatus(id: string, status: Event['status']): Promise<Event> {
    return this.request(`/events/${id}/status`, {
      method: 'PUT',
      body: JSON.stringify({ status }),
    });
  }

  // Event image upload methods
  async uploadEventImage(eventId: string, file: File): Promise<{ imageUrl: string; filename: string }> {
    const formData = new FormData();
    formData.append('image', file);
    
    const response = await fetch(`${API_BASE_URL}/events/${eventId}/images`, {
      method: 'POST',
      body: formData,
    });
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      const errorMessage = errorData.error || `HTTP error! status: ${response.status}`;
      throw new Error(errorMessage);
    }
    
    return response.json();
  }

  async uploadTempEventImage(file: File): Promise<{ imageUrl: string; filename: string }> {
    const formData = new FormData();
    formData.append('image', file);
    
    const response = await fetch(`${API_BASE_URL}/events/temp/images`, {
      method: 'POST',
      body: formData,
    });
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      const errorMessage = errorData.error || `HTTP error! status: ${response.status}`;
      throw new Error(errorMessage);
    }
    
    return response.json();
  }

  // Kullanıcı adresleri
  async getUserAddresses(userId: string): Promise<any[]> {
    return this.request(`/addresses/${userId}`);
  }

  async createUserAddress(addressData: any): Promise<any> {
    return this.request('/addresses', {
      method: 'POST',
      body: JSON.stringify(addressData),
    });
  }

  async updateUserAddress(id: string, addressData: any): Promise<any> {
    return this.request(`/addresses/${id}`, {
      method: 'PUT',
      body: JSON.stringify(addressData),
    });
  }

  async deleteUserAddress(id: string): Promise<{ message: string }> {
    return this.request(`/addresses/${id}`, {
      method: 'DELETE',
    });
  }

  // Kullanıcı ödeme yöntemleri
  async getUserPaymentMethods(userId: string): Promise<any[]> {
    return this.request(`/payment-methods/${userId}`);
  }

  async createUserPaymentMethod(paymentMethodData: any): Promise<any> {
    return this.request('/payment-methods', {
      method: 'POST',
      body: JSON.stringify(paymentMethodData),
    });
  }

  async updateUserPaymentMethod(id: string, paymentMethodData: any): Promise<any> {
    return this.request(`/payment-methods/${id}`, {
      method: 'PUT',
      body: JSON.stringify(paymentMethodData),
    });
  }

  async deleteUserPaymentMethod(id: string): Promise<{ message: string }> {
    return this.request(`/payment-methods/${id}`, {
      method: 'DELETE',
    });
  }

  // Yardımcı işlemler
  async loadDemoData(): Promise<{ message: string }> {
    return this.request('/load-demo-data', {
      method: 'POST',
    });
  }

  async clearAllData(): Promise<{ message: string }> {
    return this.request('/clear-all-data', {
      method: 'POST',
    });
  }
}

export const apiService = new ApiService();
export default apiService;