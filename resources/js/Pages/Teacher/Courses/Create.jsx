import { Head, useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Input from '@/components/Input';
import Textarea from '@/components/Textarea';
import Select from '@/components/Select';
import Button from '@/components/Button';
import TimezonePicker from '@/components/TimezonePicker';

export default function CoursesCreate({ tokenTypes }) {
    const { data, setData, post, processing, errors } = useForm({
        title: '',
        description: '',
        start_time: '',
        end_time: '',
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        max_participants: '',
        visibility: 'public',
        token_type_id: '',
    });

    function submit(e) {
        e.preventDefault();
        post('/teacher/courses');
    }

    return (
        <AuthenticatedLayout>
            <Head title="Create Course" />
            <h1 className="text-2xl font-bold mb-4">Create Course</h1>
            <form onSubmit={submit} className="max-w-lg bg-white shadow rounded p-6">
                <Input label="Title" name="title" value={data.title} onChange={(e) => setData('title', e.target.value)} error={errors.title} required />
                <Textarea label="Description" name="description" value={data.description} onChange={(e) => setData('description', e.target.value)} error={errors.description} />

                <Input label="Start Time" type="datetime-local" name="start_time" value={data.start_time} onChange={(e) => setData('start_time', e.target.value)} error={errors.start_time} required />
                <Input label="End Time" type="datetime-local" name="end_time" value={data.end_time} onChange={(e) => setData('end_time', e.target.value)} error={errors.end_time} required />

                <TimezonePicker
                    label="Course Timezone"
                    name="timezone"
                    value={data.timezone}
                    onChange={(e) => setData('timezone', e.target.value)}
                    error={errors.timezone}
                    required
                />

                <Input label="Max Participants" type="number" name="max_participants" value={data.max_participants} onChange={(e) => setData('max_participants', e.target.value)} error={errors.max_participants} />

                <Select
                    label="Visibility"
                    name="visibility"
                    value={data.visibility}
                    onChange={(e) => setData('visibility', e.target.value)}
                    options={[
                        { value: 'public', label: 'Public' },
                        { value: 'private', label: 'Private (link only)' },
                        { value: 'invite_only', label: 'Invite Only' },
                        { value: 'token_gated', label: 'Token Gated' },
                    ]}
                    error={errors.visibility}
                />

                {data.visibility === 'token_gated' && (
                    <Select
                        label="Required Token Type"
                        name="token_type_id"
                        value={data.token_type_id}
                        onChange={(e) => setData('token_type_id', e.target.value)}
                        options={tokenTypes.map((tt) => ({ value: tt.id, label: tt.name }))}
                        error={errors.token_type_id}
                        required
                    />
                )}

                <Button type="submit" disabled={processing}>Create Course</Button>
            </form>
        </AuthenticatedLayout>
    );
}
