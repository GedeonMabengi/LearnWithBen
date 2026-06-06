<?php

namespace App\Console\Commands;

use App\Models\Token;
use Illuminate\Console\Command;

class ExpireTokens extends Command
{
    protected $signature = 'tokens:expire';

    protected $description = 'Expire tokens that are past their expiration date or have no remaining uses.';

    public function handle(): int
    {
        $expired = Token::where('status', 'active')
            ->where(function ($query) {
                $query->whereNotNull('expires_at')
                    ->where('expires_at', '<=', now());
            })
            ->orWhere(function ($query) {
                $query->whereNotNull('remaining_uses')
                    ->where('remaining_uses', '<=', 0);
            })
            ->update(['status' => 'expired']);

        $this->info("Expired {$expired} token(s).");

        return Command::SUCCESS;
    }
}
